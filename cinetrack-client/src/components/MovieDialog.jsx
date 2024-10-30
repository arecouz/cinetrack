import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog'; 

const MovieDialog = ({ open, onClose, movie }) => {
  if (!movie) return null; 

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{movie.title}</DialogTitle>
          <DialogDescription>
            <p>
              <strong>Release Date:</strong> {movie.release_date || 'N/A'}
            </p>
            <p>
              <strong>Director:</strong> {movie.director || 'N/A'}
            </p>
            <p>
              <strong>Description:</strong> {movie.description || 'N/A'}
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogClose className="absolute top-2 right-2">X</DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default MovieDialog;
