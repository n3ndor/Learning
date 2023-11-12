import PageOne from "@/app/components/PageOne";
import PageTwo from "@/app/components/PageTwo";
import PageThree from "@/app/components/PageThree";
import PageFour from "@/app/components/PageFour";
import PageFive from "@/app/components/PageFive"
import PageAnimationWrapper from "@/app/components/PageAnimationWrapper";

export default function Home() {
  return (
    <PageAnimationWrapper>
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
    </PageAnimationWrapper>
  );
}