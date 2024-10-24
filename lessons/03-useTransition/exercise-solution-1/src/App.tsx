import { memo, useMemo, useState, useTransition } from "react";

function getRandomElement(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomSentence() {
  const subjects = [
    "The cat",
    "A dog",
    "The bird",
    "A person",
    "An elephant",
    "The programmer",
  ];
  const verbs = ["jumps", "runs", "flies", "writes", "eats", "codes"];
  const objects = [
    "over the fence",
    "in the park",
    "a book",
    "a sandwich",
    "through the window",
    "on a computer",
  ];

  const subject = getRandomElement(subjects);
  const verb = getRandomElement(verbs);
  const object = getRandomElement(objects);

  const sentence = `${subject} ${verb} ${object}.`;
  return sentence;
}

const largeDataSet: TableData = [...Array(100000).keys()].map((i) => ({
  id: `${i + 1}`,
  name: `Item ${i + 1}: ${generateRandomSentence()}`,
}));

type TableData = {
  id: string;
  name: string;
}[];

const Table = ({ data, query }: { data: TableData; query: string }) => {
  // Memoize filtered rows to avoid recalculating every render
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, data]);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const MemoedTable = memo(Table);

const LargeDataTable = ({ data }: { data: TableData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [deferredQuery, setDeferredQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          startTransition(() => {
            setDeferredQuery(e.target.value);
          });
        }}
        placeholder="Search..."
      />
      <div style={{ color: isPending ? "#ccc" : "inherit" }}>
        <MemoedTable data={data} query={deferredQuery} />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Deferred Value Table Example</h1>
      <LargeDataTable data={largeDataSet} />
    </div>
  );
};

export default App;
