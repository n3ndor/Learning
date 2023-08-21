import { useRouter } from 'next/router';
import Layout from './Layout';
import { GetServerSideProps } from 'next';
import UpdateItemForm from '../components/UpdateItemForm';
import Link from 'next/link';

type Item = {
  _id: string;
  name: string;
  description: string;
};

type Props = {
  item: Item;
};

function ItemPage({ item }: Props) {
  const router = useRouter();

  async function handleUpdate(updatedItem: { name: string; description: string }) {
    try {
      const res = await fetch(`/api/updateItem?_id=${item._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });
      if (res.status === 200) {
        router.push('/');
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      console.error('Failed to update the item:', error);
    }
  }

  async function handleDelete() {
    try {
      const res = await fetch(`/api/deleteItem?_id=${item._id}`, { method: 'DELETE' });
      const data = await res.json();
      console.log('Delete API Response:', data);
      if (data.acknowledged && data.deletedCount === 1) {
        router.push('/');
      } else {
        console.error('Failed to delete item', data);
      }
    } catch (error) {
      console.error('An error occurred while deleting the item.', error);
    }
}

  if (!item) {
    return (
        <Layout>
            <div className="p-4">
                <h1>Item not found</h1>
            </div>
        </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl mb-4">{item.name}</h1>
        <p>{item.description}</p>
        <div className="mt-4">
          <UpdateItemForm initialData={item} onUpdateItem={handleUpdate} />
          <button onClick={handleDelete} className="p-2 bg-red-500 text-white">Delete</button>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    if (!context.params) {
      return { props: {} };
    }
    
    const { _id } = context.params as { _id: string };
    const res = await fetch(`http://localhost:3000/api/getItem?_id=${_id}`);
    const item: Item = await res.json();

    if (!item) {
      return { props: {} };
    }
    
    return {
      props: {
        item,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {},
    };
  }
};

export default ItemPage;
