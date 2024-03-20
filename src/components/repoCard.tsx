import WatchIcon from "../components/icons/WatchIcon";
import ForkIcon from "../components/icons/ForkIcon";
import StarIcon from "../components/icons/StarIcon";
import GitIcon from "../components/icons/GitIcon";
import LinkIcon from "../components/icons/LinkIcon";
import Link from "next/link";
import styles from "../style/RepoCard.module.css";

type props = {
  repo: {
    name: string;
    description: string;
    watchers: number;
    forks: number;
    stargazers_count: number;
    html_url: string;
    homepage: string;
  };
};

const RepoCard = ({ repo }: props) => {
  return (
    <div className={styles.card}>
      <div>
        <h3 className={styles.title}>{repo.name}</h3>
        <p>{repo.description}</p>
      </div>
      <div className={styles.stats}>
        <div>
          <div>
            <WatchIcon className={styles.icon} /> {repo.watchers}
          </div>
          <div>
            <ForkIcon className={styles.icon} /> {repo.forks}
          </div>
          <div>
            <StarIcon className={styles.icon} /> {repo.stargazers_count}
          </div>
        </div>
        <div>
          <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <GitIcon className={styles.gitIcon} />
          </Link>
          {repo.homepage && (
            <Link
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon className={styles.icon} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
