import React from "react";
import MainHeader from "@/components/MainHeader";
import UserProfile from "@/components/UserProfile";
import ProfilePosts from "@/components/ProfilePosts";

const index = () => {
    return (
        <main>
            <MainHeader fixedHeight={200} />
            <div className="px-5">
                <UserProfile />
            </div>
            <ProfilePosts />
        </main>
    );
};

export default index;
