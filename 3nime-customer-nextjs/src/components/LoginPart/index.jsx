import AuthLoginPartPc from "./AuthLoginPartPc";
import AuthLoginPartTablet from "./AuthLoginPartTablet";
import LoginPartPc from "./LoginPartPc";
import LoginPartTablet from "./LoginPartTablet";

import React, { useState } from 'react'

export default function LoginPart() {

    return (
        <>
            <AuthLoginPartPc />

            <AuthLoginPartTablet />

            <LoginPartPc />

            <LoginPartTablet />

        </>
    )
}
