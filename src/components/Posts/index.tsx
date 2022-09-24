import './styles.css';

import Skeleton from '@mui/material/Skeleton';
import { useEffect, useState } from 'react';

import { IPost } from '../../types/item';
import { Item } from '../Item';

declare interface State {
  data: IPost[];
}

export const Posts = () => {
  const [state, setState] = useState<State | null>(null);

  const fetchData = async () => {
    const response = await fetch('https://dummyapi.io/data/v1/post', {
      method: 'GET',
      headers: { 'app-id': '632f413ca39d3fbe2fb16d3c' },
    });

    const posts = await response.json();

    console.log('CARREGUEI!');

    setState(posts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (state === null) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <Skeleton variant="rounded" width={'100%'} height={400} />
        <Skeleton variant="rounded" width={'100%'} height={400} />
        <Skeleton variant="rounded" width={'100%'} height={400} />
        <Skeleton variant="rounded" width={'100%'} height={400} />
      </div>
    );
  }

  if (state.data.length > 0) {
    console.log(state.data);

    return (
      <>
        {state && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {state.data.map((item) => {
              return <Item key={item.id} item={item} />;
            })}
          </div>
        )}
      </>
    );
  }

  return null;
};
