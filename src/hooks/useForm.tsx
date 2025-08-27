import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

export const useForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formFields = formRef.current;

    if (!formFields) {
      toast.error('Form is not available. Please try again.');
      return;
    }
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formFields,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
      )
      .then(
        () => {
          toast.success(
            `Thank you, ${formFields?.user_name.value}, for reaching out! I'll get back to you soon.`
          );
          setIsSubmitting(false);
          formFields?.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error('Something went wrong. Please try again later.');
          setIsSubmitting(false);
        }
      );
  };

  return { formRef, isSubmitting, handleSubmit };
};
