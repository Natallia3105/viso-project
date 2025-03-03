type Props = {
  data: {
    name: string;
    value: string;
  }[];
};

const List = ({ data }: Props) => {
  return (
    <ul className="divide-y divide-gray-200 w-full">
      {data.map(({ name, value }) => {
        return (
          <li className="pb-3" key={name}>
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">{name}</div>

              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                {value ? value : '-'}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
