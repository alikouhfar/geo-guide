import { Notification } from "@mantine/core";

interface IProps {
  spacing?: string;
  title: string;
  message: string;
}

export default function ErrorMessage({ spacing, title, message }: IProps) {
  return (
    <div className={spacing || "mt-0"}>
      <Notification title={title} color="red" withCloseButton={false}>
        {message}
      </Notification>
    </div>
  );
}
