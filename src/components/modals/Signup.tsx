import { SignUpProps } from '@/types/useType';
import InputBase from '@components/inputs/InputBase';
import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState<SignUpProps>({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    phone: '',
    address: '',
    username: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <form className="w-full">
        <div className="flex flex-col">
          <InputBase label="이메일" type="email" name="email" fullWidth />
          <InputBase
            label="비밀번호"
            type="password"
            name="password"
            fullWidth
          />
          <InputBase
            label="비밀번호 확인"
            type="password"
            name="passwordConfirm"
            fullWidth
          />
          <InputBase label="닉네임" type="text" name="nickname" fullWidth />
          <InputBase label="주소" type="text" name="address" fullWidth />
          <InputBase label="전화번호" type="tel" name="phone" fullWidth />
          <InputBase label="이름" type="text" name="name" fullWidth />
        </div>
      </form>
    </div>
  );
};

export default Signup;
