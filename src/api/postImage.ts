import { Images } from 'assets/index';

const postImage = async () => {
  const data = new FormData();
  data.append('randomtext', 'Image Upload');
  data.append('file', Images.mock);
  await fetch('http://10.0.2.2:8000/image/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: data,
  }).catch(err => console.log('err', err));
};

export { postImage };

// TODO: bring react-native-image-picker into the project
