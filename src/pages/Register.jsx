import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

const Register = () => {
    return (
        <div>
            <h1 className="text-center p-5 text-3xl">Daftarkan Dirimu Sekarang</h1>
            <div className="grid w-4/6 pt-5 px-10 bg-primary rounded-lg m-auto">
                <Form />
            </div>
        </div>
    );
    }

export default Register;