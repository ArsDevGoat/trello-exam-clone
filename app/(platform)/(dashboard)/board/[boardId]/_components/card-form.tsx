"use client";

import { toast } from "sonner"
import { useParams } from "next/navigation";
import { useAction } from "@/hooks/use-acrions";
import { useRef, ElementRef, forwardRef, KeyboardEventHandler, } from "react";

import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createCard } from "@/actions/create-card";
import { FormSubmit } from "@/components/form/form-submit";
import { FormTextarea } from "@/components/form/form-textarea";
import { useOnClickOutside, useEventListener } from "usehooks-ts";

interface CardFormProp {
  listId: string;
  isEditing: boolean;
  enableEditing: () => void;
  disableEditing: () => void;
}

export const CardForm = forwardRef<HTMLTextAreaElement, CardFormProp>(
  ({ listId, isEditing, enableEditing, disableEditing }, ref) => {
    const params = useParams();
    const formRef = useRef<ElementRef<"form">>(null);

    const { execute, fieldErrors } = useAction(createCard,{
      onSuccess: (data) => {
        toast.success(`Card "${data.title}" created`);
        formRef.current?.reset();
      },
      onError: (error) => {
        toast.error(error);
      },
    });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        disableEditing();
      };
    };

    useOnClickOutside(formRef, disableEditing);
    useEventListener("keydown", onKeyDown)

    const onTextareakeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        formRef.current?.requestSubmit();
      }
    };

    const onSubmit = (formData: FormData) => {
      const title = formData.get("title") as string;
      const listId = formData.get("listId") as string;
      const boardId = params.boardId as string;

      execute({ title, listId, boardId, });
    };

    if (isEditing) {
      return (
        <form
          ref={formRef}
          action={onSubmit}
          className="m-1 py-0.1 px-1 space-y-4"
        >
          <FormTextarea 
            ref={ref}
            id="title"
            errors={fieldErrors}
            onKeyDown={onTextareakeyDown}
            placeholder="Enter a title for this card..."
          />
          <input 
            hidden
            id="listId"
            name="listId"
            value={listId}
          />
          <div className="flex items-center gap-x-1">
            <FormSubmit>
              Add card
            </FormSubmit>
            <Button
              onClick={disableEditing}
              size={"sm"}
              variant={"ghost"}>
              <X className="w-5 h-5"/>
            </Button>
          </div>
        </form>
      )
    }

    return (
      <div className="pt-2 px-2">
        <Button
          size={"sm"}
          variant={"ghost"}
          onClick={enableEditing}
          className="h-auto w-full px-2 py-1.5 justify-start text-muted-foreground text-sm"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add a card
        </Button>
      </div>
    );
  }
);

CardForm.displayName = "CardForm";
