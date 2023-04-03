import BaseButton from '@components/buttons/BaseButton';
import InputBase from '@components/inputs/InputBase';
import React, { FormEventHandler, useState } from 'react';
import { useModal } from '@/hooks/useModal';
import Signup from './Signup';

interface LogInFormProps {
  email: string;
  password: string;
}

const LogIn = () => {
  const [formData, setFormData] = useState<LogInFormProps>({
    email: '',
    password: '',
  });
  const { changeModal } = useModal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex w-full flex-col">
      <form className="mt-16 flex flex-col" onSubmit={handleSubmit}>
        <InputBase
          label="email"
          name="email"
          fullWidth
          type="email"
          onChange={handleChange}
          value={formData.email}
        />
        <InputBase
          label="password"
          name="password"
          fullWidth
          type="password"
          onChange={handleChange}
          value={formData.password}
        />
        <div className="flex flex-col gap-4">
          <BaseButton variant="login" size="xl" fullWidth>
            <p className="text-xl">로그인</p>
          </BaseButton>
          <BaseButton
            variant="signup"
            size="xl"
            fullWidth
            onClick={() =>
              changeModal({ title: '회원가입', content: <Signup /> })
            }
          >
            <p className="text-xl">회원가입</p>
          </BaseButton>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
