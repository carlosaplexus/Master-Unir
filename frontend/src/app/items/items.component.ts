import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemsService, Item } from '../services/items.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  newName = '';

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemsService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  createItem(): void {
    if (!this.newName.trim()) return;

    this.itemsService.createItem(this.newName).subscribe(() => {
      this.newName = '';
      this.loadItems();
    });
  }

  editItem(item: Item): void {
    const newName = prompt('Nuevo nombre:', item.name);
    if (!newName) return;

    this.itemsService.updateItem(item._id!, newName).subscribe(() => {
      this.loadItems();
    });
  }

  deleteItem(id: string): void {
    if (!confirm('¿Eliminar este item?')) return;

    this.itemsService.deleteItem(id!).subscribe(() => {
      this.loadItems();
    });
  }
}


