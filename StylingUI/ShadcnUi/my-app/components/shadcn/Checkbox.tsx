
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider  } from "react-hook-form";
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"


const items = [
  { id: "recents", label: "Recents" },
  { id: "home", label: "Home" },
  { id: "applications", label: "Applications" },
  { id: "desktop", label: "Desktop" },
  { id: "downloads", label: "Downloads" },
  { id: "documents", label: "Documents" },
] as const;

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.length > 0, {
    message: "You have to select at least one item.",
  }),
});

type FormData = {
  items: (typeof items[number]['id'])[];
};

export const Shadcn_Checkbox = () => {
  const methods = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  });

  const onSubmit = (data: FormData) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <div>
      <p>CheckBox:</p>
      <hr />
      <div className="flex gap-4 my-6">
        <Checkbox id="basic-checkbox" />
        <label htmlFor="basic-checkbox" className="text-sm font-medium">Basic example</label>
      </div>
      <hr />

      <p className="my-4">Checkbox with React Hook Form:</p>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center space-x-2">
              <Checkbox
                id={item.id}
                {...methods.register("items")}
                value={item.id}
                defaultChecked={methods.getValues("items").includes(item.id)}
              />
              <label htmlFor={item.id}>{item.label}</label>
            </div>
          ))}
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    </div>
  );
};