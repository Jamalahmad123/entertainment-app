import { useNavigate } from "react-router-dom";

const Pagination = ({ page, totalPages, urlPath }) => {
  const btnStyle = `text-white font-semibold text-center px-4 border-2 border-white py-2`;

  const navigate = useNavigate();

  const nextPage = () => navigate(`/${urlPath}/${page + 1}`);

  const prevPage = () => navigate(`/${urlPath}/${page - 1}`);

  return (
    <div className="flex items-center justify-center">
      <button
        className={`${btnStyle} rounded-l-lg`}
        disabled={page === 1}
        onClick={prevPage}
      >
        Prev
      </button>
      <p className="text-darkBlue bg-white font-bold px-4 py-2 border-t-2 border-b-2 border-white">
        Page {page} of {totalPages}
      </p>
      <button
        className={`${btnStyle} rounded-r-lg`}
        disabled={page === totalPages}
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
