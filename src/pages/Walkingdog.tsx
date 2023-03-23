import ArticleCard from '@components/cards/ArticleCard';

const Walkingdog = () => {
  return (
    <div className="flex h-wholeScreen w-full bg-defaultBg px-baseX py-baseY">
      <div className="row-auto grid h-fit w-full grid-cols-4 gap-5">
        <ArticleCard
          title="Name"
          author="chanhwi"
          date="2023-04-08"
          description="Description"
          imageUrl="https://source.unsplash.com/random?q=50"
        />
        <ArticleCard
          title="Name"
          author="chanhwi"
          date="2023-04-08"
          description="Description"
          imageUrl="https://source.unsplash.com/random?q=50"
        />
        <ArticleCard
          title="Name"
          author="chanhwi"
          date="2023-04-08"
          description="Description"
          imageUrl="https://source.unsplash.com/random?q=50"
        />
      </div>
    </div>
  );
};

export default Walkingdog;
