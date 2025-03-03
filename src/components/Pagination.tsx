import ReactPaginate from 'react-paginate';

type Props = {
  pageCount: number;

  onPageChange(selected: number): void;
};

const Pagination = ({ pageCount, onPageChange }: Props) => {
  return (
    <div className="w-full">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(selectedItem) => onPageChange(selectedItem.selected)}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center space-x-2 mt-4"
        pageClassName="bg-white flex border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-100"
        activeClassName="bg-blue-500 text-white"
        previousClassName="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
        nextClassName="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
        breakClassName="px-3 py-2"
        disabledClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
};

export default Pagination;
