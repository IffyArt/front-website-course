import Card from '@/components/Card';
import { NextPage } from 'next';

const NewsPage: NextPage = () => {
  return (
    <div>
      I AM NewsPage page
      <Card
        title='Title Event'
        imgUrl='https://picsum.photos/200/300'
        local='台北商業大學'
        context='jfioa fiowej fiwj iowjf iejf ioawjefio jif'
      />{' '}
      <Card
        title='Title Event'
        imgUrl='https://picsum.photos/200/300'
        local='台北商業大學'
        context='jfioa fiowej fiwj iowjf iejf ioawjefio jif'
      />{' '}
      <Card
        title='Title Event'
        imgUrl='https://picsum.photos/200/300'
        local='台北商業大學'
        context='jfioa fiowej fiwj iowjf iejf ioawjefio jif'
      />
    </div>
  );
};

export default NewsPage;
