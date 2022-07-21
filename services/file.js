import API from "./api";

export const downloadFile = async function (key) {
  return API.get(`/api/admin/cvDownload?key=${key}`).then(
    (response) => response
  );
};

export const uploadImage = async function (formData) {
  try {
    const config = {
      Headers: {
        "content-type": "multipart/form-data",
      },
      onUploadProgress: (event) => {
        setProgress(Math.round((event.loaded * 320) / event.total));
      },
    };
    const url = `/api/admin/imageUpload`;

    if (!url) alert(error);

    const res = await API.post(url, formData, config);
    if (res.status === 200) {
      return { status: true, data: res.data };
    }
  } catch (error) {
    console.log(error);
  }
};

// export const uploadCv = async function (formData) {
//   try {
//     const config = {
//       Headers: {
//         "content-type": "multipart/form-data",
//       },
//       onUploadProgress: (event) => {
//         setProgress(Math.round((event.loaded * 320) / event.total));
//       },
//     };
//     const url = `/api/admin/fileUpload`;

//     if (!url) alert(error);

//     const res = await API.post(url, formData, config);
//     if (res.status === 200) {
//       return { status: true, data: res.data };
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
