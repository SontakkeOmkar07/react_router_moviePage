export const contactData = async ({ request }) => {//this is a request object




  try {

    const res = await request.formData();//the form data it is a funtion of request object  . in this all contact data are included
    console.log(res);


    const data  = Object.fromEntries(res);

    console.log(data);




  } catch (error) {
    console.error(error);

  }
}
