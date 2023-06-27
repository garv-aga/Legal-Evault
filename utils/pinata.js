const axios = require('axios')
const FormData = require('form-data')
const JWT = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4ZTUxYmEzMC02NDk1LTQxNTctOTBkOS0xYjdkZmExZDEyYzciLCJlbWFpbCI6ImdhcnZhZ2Fyd2FsMjAwM0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZjMyOWE0N2EyNzc3YTMzNTJmYjEiLCJzY29wZWRLZXlTZWNyZXQiOiIwNWI5YmQyNzNmYjc2OTVkZjY5ODJjZTIwZWVhNDNlYWY4YTAyNDMyZTE4ZjZhZjE5Njg4MTkzZTYwOWQzZGU5IiwiaWF0IjoxNjg3ODcwODY4fQ.Q_cTa-DSK-IT--TC7SwONnsJAOv453XDonByvguiPM0'
export const pinFileToIPFS = async (formData) => {

  try {
    const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
      maxBodyLength: "Infinity",
      headers: {
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
        Authorization: JWT,
      }
    });
    console.log(res.data);
    return res.data.IpfsHash;
  } catch (error) {
    console.log(error);
  }
}


