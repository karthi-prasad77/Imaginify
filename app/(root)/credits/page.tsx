import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Header from "@/components/shared/Header";
import { getUserById } from "@/lib/actions/user.actions";
import CreditsClient from "@/components/shared/CreditsClient";

const Credits = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <>
      <Header title="Buy Credits" subTitle="Choose a credit package that suits your needs!" />
      <CreditsClient userId={user._id} />
    </>
  );
};

export default Credits;
