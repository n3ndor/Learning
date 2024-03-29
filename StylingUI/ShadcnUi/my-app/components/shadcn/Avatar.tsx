import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const Shadcn_Avatar = () => (
  <div>
    <p>Avatar:</p>
      <Avatar>
        <AvatarImage src="avatar.jpg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
  </div>

)