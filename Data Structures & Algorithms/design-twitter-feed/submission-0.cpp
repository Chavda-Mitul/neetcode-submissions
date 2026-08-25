
class Twitter {
    struct Tweet {
        int tweetId;
        int timestamp;
        Tweet* next;

        Tweet(int tweetId, int timestamp, Tweet* next = nullptr)
            : tweetId(tweetId), timestamp(timestamp), next(next) {}
    };

    struct Compare {
        bool operator()(Tweet* a, Tweet* b) {
            return a->timestamp < b->timestamp;
        }
    };

    unordered_map<int, Tweet*> tweets;
    unordered_map<int, unordered_set<int>> following;

    int timestamp = 0;

public:
    Twitter() {}

    void postTweet(int userId, int tweetId) {
        Tweet* newTweet = new Tweet(
            tweetId,
            timestamp++,
            tweets[userId]
        );

        tweets[userId] = newTweet;
    }

    vector<int> getNewsFeed(int userId) {
        priority_queue<Tweet*, vector<Tweet*>, Compare> pq;
        vector<int> feed;

        if (tweets[userId]) {
            pq.push(tweets[userId]);
        }

        for (int followeeId : following[userId]) {
            if (tweets[followeeId]) {
                pq.push(tweets[followeeId]);
            }
        }

        // Get 10 most recent tweets
        while (!pq.empty() && feed.size() < 10) {
            Tweet* current = pq.top();
            pq.pop();

            feed.push_back(current->tweetId);

            if (current->next) {
                pq.push(current->next);
            }
        }

        return feed;
    }

    void follow(int followerId, int followeeId) {
        following[followerId].insert(followeeId);
    }

    void unfollow(int followerId, int followeeId) {
        following[followerId].erase(followeeId);
    }
};