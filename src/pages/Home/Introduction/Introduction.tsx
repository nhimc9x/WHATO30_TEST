import introductionBg from '~/assets/images/introduction-bg.png'

export const Introduction = () => {
  return (
    <div
      style={{ backgroundImage: `url(${introductionBg})` }}
      className="w-full h-[576px] bg-cover bg-center mdl:px-44 sm:px-32 xs:px-20 px-8 flex flex-col gap-14 justify-center text-white"
    >
      <div className="text-5xl font-extrabold tracking-[5px] uppercase">What Happened!</div>
      <div className="max-w-[666px] text-xl">
        How to create mobile-optimized videos in minutes. Not a designer,
        every team makes a lot of videos Can be trimmed. Take the first
        step to your brand's success. How to create
        mobile-optimized videos in minutes.
      </div>
    </div>
  )
}
