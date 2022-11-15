import { Images } from 'assets/index';

const postImage = async () => {
  //Check if any file is selected or not
  if (true) {
    //If file selected then create FormData

    // const file = {
    //   uri: filePath,
    //   type: fileType,
    //   name: filename,,
    // };
    const data = new FormData();
    data.append('randomtext', 'Image Upload');
    data.append('file', Images.mock);
    let res = await fetch('http://10.0.2.2:8000/image/upload', {
      method: 'POST',
      body: data,
    }).catch(err => console.log('err', err));
  } else {
    //if no file selected the show alert
    console.log('Please Select File first');
  }
};

export { postImage };
