import { trpc } from 'frontend-trpc'
import React, { useCallback } from 'react'
import { Button } from 'ui'

function randomEl<T>(els: T[] | undefined | null) {
  return isNotEmpty(els)
    ? els[Math.floor(Math.random() * (els.length - 1))]!
    : null
}

function isNotEmpty<T>(els: T[] | undefined | null): els is [T, ...T[]] {
  return Array.isArray(els) && els.length > 0
}

export default function Posts() {
  const utils = trpc.useContext()

  const { data: users } = trpc.user.user.getAllUsers.useQuery()
  const { data: posts } = trpc.post.post.getAllPosts.useQuery()

  const addRandomPostMutation = trpc.post.post.addRandomPost.useMutation({
    onSettled: () => {
      utils.post.post.invalidate()
    },
  })

  const deletePostMutation = trpc.post.post.deletePost.useMutation({
    onSettled: () => {
      utils.post.post.invalidate()
    },
  })

  const getUserById = useCallback(
    (id: number) => users?.find(u => u.id === id),
    [users],
  )

  const handleDeletePost = useCallback(
    async (id: number) => {
      deletePostMutation.mutate({
        id,
      })
    },
    [deletePostMutation],
  )

  const handleAddRandomPost = useCallback(async () => {
    addRandomPostMutation.mutate({
      userId: randomEl(users)?.id ?? -1,
    })
  }, [addRandomPostMutation, users])

  return (
    <React.Fragment>
      <div tw="text-2xl text-subdued font-semibold">Posts</div>
      <div tw="flex flex-col gap-4 mt-8">
        {users && users.length === 0 && (
          <span tw="text-warning">There are no users registered</span>
        )}
        {posts &&
          posts.length === 0 &&
          users &&
          users.length > 0 &&
          'No posts found'}
        {posts?.map(p => (
          <div key={p.id} tw="flex items-center gap-4">
            <div tw="flex-none w-[500px]">
              {p.body}
              <div tw="text-subdued italic">
                {` by ${getUserById(p.userId)?.name}`}
              </div>
            </div>
            <Button
              onClick={() => handleDeletePost(p.id)}
              color="danger"
              text="Delete"
            />
          </div>
        ))}
      </div>
      <div tw="mt-8">
        <Button
          onClick={handleAddRandomPost}
          disabled={!isNotEmpty(users)}
          text="Add post"
          color="success"
          variant="filled"
        />
      </div>
    </React.Fragment>
  )
}
