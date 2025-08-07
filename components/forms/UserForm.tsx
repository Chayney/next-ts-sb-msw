import React, { useState } from 'react';
import { InputField } from './InputField';
import { SubmitButton } from './SubmitButton';

type FormData = {
    name: string;
    email: string;
};

export const UserForm: React.FC = () => {
    const [form, setForm] = useState<FormData>({ name: '', email: '' });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        const res = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
            setMessage('ユーザーを作成しました！');
            setForm({ name: '', email: '' });
        } else {
            setMessage('エラーが発生しました');
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField label="名前" name="name" value={form.name} onChange={handleChange} />
            <InputField label="メールアドレス" name="email" value={form.email} onChange={handleChange} />
            <SubmitButton label="作成" loading={loading} />
            {message && <p>{message}</p>}
        </form>
    );
};
