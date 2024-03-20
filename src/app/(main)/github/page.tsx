"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import RepoCard from "@/components/repoCard";
import styles from "../../../style/githubpage.module.css";

type Repo = {
  id: number;
  name: string;
  description: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
  html_url: string;
  homepage: string;
};

type User = {
  avatar_url: string;
  login: string;
  public_repos: string;
  followers: string;
};

const GithubPage = () => {
  const [user, setUser] = useState<User>();
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(
          `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer${process.env.GITHUB_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
        const userData = await userResponse.json();
        setUser(userData);

        const repoResponse = await fetch(
          `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer${process.env.GITHUB_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );

        let repoData: Repo[] = await repoResponse.json();
        repoData = repoData
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
        setRepos(repoData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!user || !repos) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.user}>
        <div>
          <Image
            src={user.avatar_url}
            className={styles.avatar}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3 className={styles.username}>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div className={styles.container}>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div className={styles.contributions}>
        <GitHubCalendar
          username={process.env.NEXT_PUBLIC_GITHUB_USERNAME || ""}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  );
};

export default GithubPage;
