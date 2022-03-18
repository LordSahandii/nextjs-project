import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import React from 'react';

function AddNotes({ addTodo }) {
  const toast = useToast();

  function handleSubmit(e) {

    e.preventDefault();
    if (!content) {
      toast({
        title: 'No content',
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      body: content,
    };
    localStorage.setItem('notes',JSON.stringify(todo));
    addTodo(todo);
    setContent('');
  }

  const [content, setContent] = useState('');


  return (
    <form onSubmit={(e) => {handleSubmit(e)}}>
      <HStack mt='8'>
        <Input
          variant='filled'
          placeholder='Type your needs'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme='teal' px='8' type='submit'>
          Add
        </Button>
      </HStack>
    </form>
  );
}

export default AddNotes;