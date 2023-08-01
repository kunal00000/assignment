"use client";

import MovieCard from "../../components/MovieCard";
import useMovie from "../../hooks/movie";
import Link from "next/link";
import {
  User,
  createClientComponentClient
} from "@supabase/auth-helpers-nextjs";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Movie() {
  const supabase = createClientComponentClient();

  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = useRouter();

  const signOut = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setUser(null);
    router.refresh();
  };

  const checkUser = async () => {
    const {
      data: { session }
    } = await supabase.auth.getSession();

    setIsAuthenticated(Boolean(session));
    setUser(session?.user ? session.user : null);
  };

  useEffect(() => {
    checkUser();
  }, []);

  const { data: movies, isLoading } = useMovie({ user });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
          <div />
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                Hey, {user.email}!
                <button
                  className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
                  onClick={signOut}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
      {isAuthenticated ? (
        <div>
          <p className="text-3xl lg:text-4xl mx-auto max-w-xl text-center my-12">
            <strong>Movies</strong>
          </p>
          <div className="mx-[4vw] gap-[1vw] grid grid-cols-1 lg:grid-cols-4">
            {movies.map((movie_item: any) => {
              return (
                <MovieCard key={movie_item.id} movie={movie_item}></MovieCard>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="w-[100vw] text-center m-lg ">
          You are not logged in. Please login to continue
        </div>
      )}
    </div>
  );
}
