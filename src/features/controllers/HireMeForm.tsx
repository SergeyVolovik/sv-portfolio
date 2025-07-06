import { Button, Input } from '@/components';

export const HireMeForm = () => (
  <form className="w-full mt-4 mb-8 flex flex-col gap-3">
    <div className="flex flex-col sm:flex-row gap-3">
      <Input placeholder="Name" type="text" required />
      <Input placeholder="Email Address" type="email" required />
    </div>
    <textarea
      className="textarea textarea-block bg-blackRgba7 border border-blackRgba10 text-darkGray text-sm rounded-md !ring-0 hover:border-darkGray focus:border-darkGray resize-none"
      rows={5}
      placeholder="Message"
    />
    <Button className="!py-3" onClick={() => {}}>
      Submit
    </Button>
  </form>
);
