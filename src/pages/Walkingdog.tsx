import ArticleCard from '@components/cards/ArticleCard';

const Walkingdog = () => {
  return (
    <div className="flex w-full bg-defaultBg px-baseX py-baseY">
      <div className="row-auto grid w-full grid-cols-4 gap-5">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default Walkingdog;
