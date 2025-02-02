const Welcome = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-center font-medium text-2xl mb-3 tracking-wider">
          Welcome to Your
          <span className="inline-block text-secondary font-semibold opacity-90">
            Healing Oasis
          </span>
          <br />
          <span className="inline-block">in Canggu</span>
        </h1>
        <div className="space-y-1.5">
          <p className="text-justify">
            At{" "}
            <span className="italic text-primary font-medium">
              DejaVu Massage & SPA
            </span>
            , we offer a variety of treatments designed to{" "}
            <span className="text-primary font-medium">
              rejuvenate your body and mind.
            </span>
          </p>
          <h2 className="text-secondary py-2 before:content-['\201C'] after:content-['\201C'] italic text-center font-bold opacity-90 tracking-wider">
            One Massage a Day
            <span className="inline-block"> Keeps the stress away</span>
          </h2>
          <p className="text-justify">
            From soothing Balinese{" "}
            <span className="text-secondary font-medium">massages</span> and
            refreshing{" "}
            <span className="text-secondary font-medium">scrubs</span>, to{" "}
            <span className="text-secondary font-medium">
              pampering spa experiences
            </span>{" "}
            and <span className="text-secondary font-medium">hair wash</span>{" "}
            services, we tailor each treatment to your unique needs.
          </p>
          <p className="text-justify">
            We also provide specialized treatments such as{" "}
            <span className="text-secondary font-medium">Bekam Therapy</span>{" "}
            for detoxification, and{" "}
            <span className="text-secondary font-medium">Ratus Vagina</span> for
            feminine health, ensuring deep relaxation, restoration, and
            wellness.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-center tracking-wider font-medium text-xl mb-3">
          <span className="text-primary">Outcall Services</span>
        </h2>
        <p className="text-justify">
          For your convenience, we offer{" "}
          <span className="text-secondary font-medium">
            outcall services throughout Canggu
          </span>
          . Whether you&apos;re at a villa, hotel, or private residence, we
          bring our high-quality treatments directly to you, creating a peaceful
          spa experience wherever you are.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
