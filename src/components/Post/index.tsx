import './styles.css';

import Skeleton from '@mui/material/Skeleton';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IPost } from '../../types/item';
import { Item } from '../Item';

export const Post = () => {
  const [state, setState] = useState<IPost | null>(null);

  const { id } = useParams();

  const fetchData = async () => {
    const response = await fetch(`https://dummyapi.io/data/v1/post/${id}`, {
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

  console.log(state);

  if (state === null) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <Skeleton variant="rounded" width={'100%'} height={400} />
      </div>
    );
  }

  if (state !== null) {
    return (
      <>
        {state && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <Item item={state} />
          </div>
        )}
      </>
    );
  }

  return null;
};
