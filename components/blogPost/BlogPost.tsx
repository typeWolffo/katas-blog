import Image from "next/image";
import { camelToHuman } from "../../helpers/camelToHuman";
import { formatDate } from "../../helpers/formatDate";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

function BlogPost({ post }: any) {
  const { author, category, id, createdAt, description, imageUrl, title } =
    post;

  return (
    <Link href={`post/${id}`} className="post">
      <div className="post__info">
        <div className="post__info-image">
          <Image
            src={imageUrl}
            alt={`${title} image`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            fill
            priority
          />
        </div>
        <div className="post__info-image-overlay">
          <div className="post__info-content">
            <p>{author}</p>
            <p>{camelToHuman(category)}</p>
          </div>
          <p>{formatDate(createdAt)}</p>
        </div>
      </div>
      <div className="post__content">
        <h3 className="post__content-title">{title}</h3>
        <p className="post__content-description">{description}</p>
        <p className="post__content-action">
          Read post
          <FiArrowUpRight className="post__content-action-icon" />
        </p>
      </div>
    </Link>
  );
}
export default BlogPost;
