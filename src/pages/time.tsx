// pages/time.js

type Props = {
  currentTime: string;
};

export default function TimePage({ currentTime }: Props) {
  return (
    <div>
      <h1>Current Server Time</h1>
      <p>{currentTime}</p>
    </div>
  );
}

// `getServerSideProps` will be called on every request
export async function getServerSideProps() {
  // Get the current time
  const currentTime = new Date().toLocaleString();

  // Return the time as a prop to the component
  return {
    props: {
      currentTime,
    },
  };
}
