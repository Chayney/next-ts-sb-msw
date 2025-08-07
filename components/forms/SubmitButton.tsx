import React from 'react';

type SubmitButtonProps = {
    label: string;
    loading?: boolean;
};

export const SubmitButton: React.FC<SubmitButtonProps> = ({ label, loading }) => (
    <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : label}
    </button>
);
