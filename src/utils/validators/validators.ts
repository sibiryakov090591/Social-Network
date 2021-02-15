export const maxLength = (max: number) => (value: string) => {
    return value && value.length > max ? `Must be ${max} characters or less` : undefined
};

export const required = (value: string) => value ? undefined : 'Required';

export const email = (value: string) => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined
}

