import { useState } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

import { Modal, Button } from 'components';
import { AiFillCloseCircle } from 'react-icons/ai';

export function ImageGalleryItem({ gallery, onSelectModalImage }) {
  const [isModalShown, setIsModalShown] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [selectedImageTags, setSelectedImageTags] = useState(null);

  const selectModalImage = (link, tags) => {
    setSelectedImageUrl(link);
    setSelectedImageTags(tags);
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalShown(isModalShown => !isModalShown);
  };

  return gallery.map(({ id, webformatURL, largeImageURL, tags }) => (
    <GalleryItem key={id}>
      <GalleryItemImage
        id={id}
        src={webformatURL}
        alt={tags}
        onClick={() => selectModalImage(largeImageURL, tags)}
      />

      {isModalShown && (
        <Modal onToggleModal={toggleModal}>
          <img src={selectedImageUrl} alt={selectedImageTags} />

          <Button type="button" mode="modalClose" onClick={toggleModal}>
            <AiFillCloseCircle />
          </Button>
        </Modal>
      )}
    </GalleryItem>
  ));
}

ImageGalleryItem.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  // onSelectModalImage: PropTypes.func.isRequired,
};
