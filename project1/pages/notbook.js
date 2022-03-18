import React from 'react'
import { Container, Button, Text, Heading, VStack, Flex, Input  } from '@chakra-ui/react'
import { AddIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import AddNotes from '../components/Notes/AddNotes'
import { useRouter } from 'next/router'
import NoteLists from '../components/Notes/NoteLists'


const Notbook = () => {
    const router = useRouter();
    
    
    const initialNotes = [
        {
          id: null,
          body: '',
        },
      ];
    
      const [notes, setNotes] = useState(""
      );
      useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
      }, [notes]);
    
      
      function deleteNote(id) {
        const newTodos = notes.filter((todo) => {
          return todo.id !== id;
        });
        setNotes(newTodos);
      }
    
      function addNote(todo) {
        setNotes([...notes, todo]);
      }

  return (
    <Container maxW="container.xxl" p={0} > 
        <Flex py={10}>
            
            <VStack w="full" h = "full" p={10} spacing={6} >
                 <VStack spacing={3} alignItems="flex-start">
                    <Button as={ArrowBackIcon} onClick={()=>{router.push("/")}} variant="ghost"></Button>
                </VStack>
                <VStack spacing={3} alignItems="center" justifyContent="center">
                    
                    <Heading>Notebook</Heading>
                </VStack>

            
                <NoteLists todos={notes} deleteTodo={deleteNote} />
                <AddNotes addTodo={addNote} />
                

            </VStack>
        </Flex>

        
    </Container>
  )
}

export default Notbook