import NewItemForm from '../components/NewItemForm';
import clientPromise from '../lib/mongodb'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link';

type ConnectionStatus = {
  isConnected: boolean
}

type Item = {
  _id: string,
  name: string,
  description: string
}

export const getServerSideProps: GetServerSideProps = async () => {
  let items: Item[] = [];

  try {
    await clientPromise; // this checks the connection

    const res = await fetch('http://localhost:3000/api/getItems');
    items = await res.json();

    return {
      props: {
        isConnected: true,
        items: items,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        isConnected: false,
        items: [],
      },
    };
  }
};

export default function Home({
  isConnected,
  items,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!isConnected) {
    return (
      <div className="p-4">
        <h2 className="subtitle">
          You are NOT connected to MongoDB. Check the <code>README.md</code>{' '}
          for instructions.
        </h2>
      </div>
    );
  }

  const handleAddItem = async (item: { name: string; description: string }) => {
    try {
      const res = await fetch('/api/addItem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
  
      if (res.status === 200) {
        // Refresh the page to see the new item
        window.location.reload();
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error('Failed to add the item:', error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">All Items</h1>
      <NewItemForm onAddItem={handleAddItem} />
      <ul>
        {items && items.map((item: Item) => (
          <li key={item._id} className="border p-2 mb-2">
            <Link href={`/${item._id}`}>{item.name}</Link>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
