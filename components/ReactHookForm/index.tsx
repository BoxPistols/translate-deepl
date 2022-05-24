// @see: https://dev.classmethod.jp/articles/mui-v5-rhf-v7/
import { Button, Container, Stack, TextField } from '@mui/material'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

// フォームの型
interface SampleFormInput {
  email: string
  name: string
  password: string
}

function ReactHookForm() {
  const { register, handleSubmit } = useForm<SampleFormInput>()

  // フォーム送信時の処理
  const onSubmit: SubmitHandler<SampleFormInput> = (data) => {
    // バリデーションチェックOK！なときに行う処理を追加
    console.log(data)
  }

  return (
    <Container maxWidth="sm" sx={{ pt: 5 }}>
      <Stack spacing={3}>
        <TextField
          required
          label="メールアドレス"
          type="email"
          {...register('email')}
        />
        <TextField required label="お名前" {...register('name')} />
        <TextField
          required
          label="パスワード"
          type="password"
          {...register('password')}
        />
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={handleSubmit(onSubmit)}
        >
          作成
        </Button>
      </Stack>
    </Container>
  )
}

export default ReactHookForm
