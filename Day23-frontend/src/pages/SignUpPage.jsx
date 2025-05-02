import React,{useState} from "react";

const SignUpPage = () => {
  const [sendingOtp,setSendingOtp]= useState(false);
  const [isOtpSent,setIsOtpSent]= useState(false);
  const [email,setEmail]= useState("");
  
  

  const handleSubmit = async (e) => {
    try {
      setSendingOtp(true);
      e.preventDefault();
      const email = e.target.email.value;
      setEmail(email);
      const resp = await fetch("http://localhost:2200/api/v1/auth/otps", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-type": "Application/json",
        },
      });

      const data = await resp.json();
      console.log(data);
      setIsOtpSent(true);

    } catch (err) {
      console.log("Error sending otp", err.message);
    }finally{
      setSendingOtp(false);
    }
  };

  if(isOtpSent){
    return(
      <div>
        <form>
          <input  value={email} disabled/>
        </form>
      </div>
    )
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          className="p-2 m-3 border-1 border-black-700 rounded-md"
          placeholder="Type your email..."
          required
        />
        <button 
          disabled={sendingOtp} 
          type="submit"
          className="p-2 m-3 border-1 border-black-700 bg-blue-500 text-white rounded-md"
          >
         {sendingOtp? "Sending OTP..":"Send OTP"}
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
