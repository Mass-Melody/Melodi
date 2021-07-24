import React, { useState, useContext } from 'react';
import './cropper.css';

import Cropper from 'react-easy-crop';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import { SnackbarContext } from '../snackbar/snackbar.js';
import { generateDownload } from '../../utils/cropImage.js';
import { IconButton, makeStyles } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Clear';

import getCroppedImg from '../../utils/cropImage.js';

// must convert to file object before posting to AWS S3 bucket
import dataURLtoFile from '../../utils/dataURLtoFile';

const useStyles = makeStyles({
  iconButton: {
    position: 'absolute',
    top: '0',
    left: '0',
  },
  cancelIcon: {
    '&:hover': {
      color:'red',
    },
  },
});

function RenderCropper({ handleCropper }) {

  const classes = useStyles();

  const inputRef = React.useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();

  const setStateSnackbarContext = useContext(SnackbarContext);

  const [image, setImage] = React.useState(null);
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0});
  const [zoom, setZoom] = React.useState(1);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener('load', () => {
        setImage(reader.result);
      });
    }
  };

  const onDownload = () => {
    if (!image) { return setStateSnackbarContext(true, 'Please select an image', 'warning')}
    generateDownload(image, croppedArea);
  }

  const clear = () => {
    if (!image) { return setStateSnackbarContext(true, 'Please select an image', 'warning')}
    setImage(null);
  }

	const upload = async () => {
		if (!image) { return setStateSnackbarContext(true, 'Please select an image', 'warning') }

		const canvas = await getCroppedImg(image, croppedArea);
		console.log('cropped image', canvas);
		const canvasDataUrl = canvas.toDataURL('image/jpeg');
		// console.log('canvas data url', canvasDataUrl);

		const convertedUrlToFile = dataURLtoFile(canvasDataUrl, 'cropped-image.jpeg');
		console.log('file object', convertedUrlToFile);
	}

  return (
    <div className='container'>
      <IconButton className={classes.iconButton} onClick={handleCropper}>
        <CancelIcon className={classes.cancelIcon} />
      </IconButton>
      <div className='container-cropper'>
				{image ? (
					<>
						<div className='cropper'>
							<Cropper
								image={image}
								crop={crop}
								zoom={zoom}
								aspect={1}
								onCropChange={setCrop}
								onZoomChange={setZoom}
								onCropComplete={onCropComplete}
							/>
						</div>

						<div className='slider'>
							<Slider
								min={1}
								max={3}
								step={0.1}
								value={zoom}
								onChange={(e, zoom) => setZoom(zoom)}
							/>
						</div>
					</>
				) : null}
			</div>

			<div className='container-buttons'>
				<input
					type='file'
					accept='image/*'
					ref={inputRef}
					onChange={onSelectFile}
					style={{ display: "none" }}
				/>

				<Button variant='contained' color='primary' style={{marginRight: '10px'}} onClick={() => clear()}>Clear</Button>
				<Button
					variant='contained'
					color='primary'
					onClick={triggerFileSelectPopup}
					style={{ marginRight: "10px" }}
				>
					Choose
				</Button>
				<Button variant='contained' color='secondary' onClick={onDownload} style={{marginRight: '10px'}}>
					Download
				</Button>
				<Button variant='contained' color='primary' onClick={upload} style={{marginRight: '10px'}}>Upload</Button>
			</div>
    </div>
  )
}

export default RenderCropper;
