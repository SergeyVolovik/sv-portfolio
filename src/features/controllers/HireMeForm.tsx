import { Button, Input } from '@/components';
import { useDarkModeContext } from '@/contexts';
import { useForm } from '@/hooks';
import { Bounce, ToastContainer } from 'react-toastify';

export const HireMeForm = () => {
  const { modeText } = useDarkModeContext();
  const { formRef, isSubmitting, handleSubmit } = useForm();

  return (
    <>
      <form
        ref={formRef}
        className="w-full mt-4 mb-8 flex flex-col gap-3"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            name="user_name"
            placeholder="Name"
            type="text"
            disabled={isSubmitting}
            required
          />
          <Input
            name="user_email"
            placeholder="Email Address"
            type="email"
            disabled={isSubmitting}
            required
          />
        </div>
        <textarea
          name="user_message"
          className="textarea textarea-block bg-blackRgba7 border border-blackRgba10 text-darkGray text-sm rounded-md !ring-0 hover:border-darkGray focus:border-darkGray resize-none"
          rows={5}
          placeholder="Message"
          disabled={isSubmitting}
        />
        <div
          className={`w-full flex ${isSubmitting ? 'hover:cursor-not-allowed' : ''}`}
        >
          <Button className="w-full !py-3" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={modeText}
        transition={Bounce}
      />
    </>
  );
};
