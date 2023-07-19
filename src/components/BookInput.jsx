import useInput from '../hooks/useInput';

function BookInput({ submit, book }) {
  const [isbn, onIsbnChange] = useInput(book ? book.isbn : '');
  const [title, onTitleChange] = useInput(book ? book.title : '');
  const [subtitle, onSubtitleChange] = useInput(book ? book.subtitle : '');
  const [author, onAuthorChange] = useInput(book ? book.author : '');
  const [published, onPublishedChange] = useInput(book ? book.published : '');
  const [publisher, onPublisherChange] = useInput(book ? book.publisher : '');
  const [pages, onPagesChange] = useInput(book ? book.pages : '');
  const [description, onDescriptionChange] = useInput(
    book ? book.description : ''
  );
  const [website, onWebsiteChange] = useInput(book ? book.website : '');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    submit({
      id: book ? book.id : '',
      isbn,
      title,
      subtitle,
      author,
      published,
      publisher,
      pages,
      description,
      website,
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className="col-lg-7 col-sm-8 mx-auto">
      <div className="form-floating col-auto mb-2">
        <input
          type="text"
          className="form-control"
          id="isbn"
          value={isbn}
          placeholder="ISBN"
          onChange={onIsbnChange}
        />
        <label htmlFor="isbn">ISBN</label>
      </div>
      <div className="form-floating col-auto mb-2">
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          placeholder="Title"
          onChange={onTitleChange}
        />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-floating col-auto mb-2">
        <input
          type="text"
          className="form-control"
          id="subtitle"
          value={subtitle}
          placeholder="Subtitle"
          onChange={onSubtitleChange}
        />
        <label htmlFor="subtitle">Subtitle</label>
      </div>
      <div className="form-floating col-auto mb-2">
        <input
          type="text"
          className="form-control"
          id="author"
          value={author}
          placeholder="Author"
          onChange={onAuthorChange}
        />
        <label htmlFor="author">Author</label>
      </div>
      <div className="form-floating col-auto mb-2">
        <input
          type="date"
          className="form-control"
          id="published"
          value={published}
          placeholder="Published"
          onChange={onPublishedChange}
        />
        <label htmlFor="published">Published</label>
      </div>
      <div className="form-floating col-auto mb-2">
        <input
          type="text"
          className="form-control"
          id="publisher"
          value={publisher}
          placeholder="Publisher"
          onChange={onPublisherChange}
        />
        <label htmlFor="publisher">Publisher</label>
      </div>
      <div className="form-floating col-auto mb-2">
        <input
          type="number"
          className="form-control"
          id="pages"
          value={pages}
          placeholder="Pages"
          onChange={onPagesChange}
        />
        <label htmlFor="pages">Pages</label>
      </div>
      <div className="form-floating col-auto mb-2">
        <input
          type="text"
          className="form-control"
          id="website"
          value={website}
          placeholder="Website"
          onChange={onWebsiteChange}
        />
        <label htmlFor="website">Website</label>
      </div>
      <div className="form-floating col-auto mb-2">
        <textarea
          style={{ height: '200px' }}
          className="form-control"
          placeholder="Description"
          id="description"
          value={description}
          onChange={onDescriptionChange}
        ></textarea>
        <label htmlFor="description">Description</label>
      </div>
      <div className="col-auto mb-2">
        <button type="submit" className="btn btn-outline-primary mb-3">
          Submit
        </button>
      </div>
    </form>
  );
}

export default BookInput;
