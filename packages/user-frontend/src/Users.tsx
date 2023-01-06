import { trpc } from 'frontend-trpc'
import React, { useCallback } from 'react'
import { Button } from 'ui'

export default function Users() {
  const utils = trpc.useContext()

  const { data: users } = trpc.user.user.getAllUsers.useQuery()

  const addRandomUserMutation = trpc.user.user.addRandomUser.useMutation({
    onSettled: () => {
      utils.user.user.invalidate()
    },
  })

  const addRandomPostMutation = trpc.post.post.addRandomPost.useMutation()

  const deleteUserMutation = trpc.user.user.deleteUser.useMutation({
    onSettled: () => {
      utils.user.user.invalidate()
      utils.post.post.invalidate()
    },
  })

  const handleAddRandomUser = useCallback(async () => {
    addRandomUserMutation.mutate({})
  }, [addRandomUserMutation])

  const handleAddRandomPost = useCallback(
    async (userId: number) => {
      addRandomPostMutation.mutate({
        userId,
      })
    },
    [addRandomPostMutation],
  )

  const handleDeleteUser = useCallback(
    async (id: number) => {
      deleteUserMutation.mutate({
        id,
      })
    },
    [deleteUserMutation],
  )

  return (
    <React.Fragment>
      <div tw="text-2xl text-subdued font-semibold">Users</div>
      <div tw="flex flex-col gap-4 mt-8">
        {users && users.length === 0 && <div>No users found</div>}
        {users?.map(u => (
          <div key={u.id} tw="flex gap-4 items-center">
            <div tw="flex-none w-[300px]">
              {u.name}
              <div tw="text-subdued">{u.email}</div>
            </div>
            <Button
              onClick={() => handleAddRandomPost(u.id)}
              text="Add post"
              color="success"
            />
            <Button
              onClick={() => handleDeleteUser(u.id)}
              color="danger"
              text="Delete"
            />
          </div>
        ))}
      </div>
      <div tw="mt-8">
        <Button
          onClick={handleAddRandomUser}
          color="success"
          text="Add user"
          variant="filled"
        />
      </div>
    </React.Fragment>
  )
}
